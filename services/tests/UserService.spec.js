const mongoose = require('mongoose');

const config = require('../../config');
const { userService } = require('../index');
const { User } = require('../../models/index');

describe('User service', () => {
	beforeAll(async () => {
		await mongoose.connect(config.databaseTestURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});

		await User.deleteMany({});
	});

	const getUser = (id) => ({
		email: `user${id}@gmail.com`,
		password: 'abc123',
		name: 'User 1',
		role: 'Client',
	});

	const getDbUser = async () => {
		const dbUser = await User.findOne({
			email: getUser(1).email,
		});

		return dbUser;
	};

	describe('register', () => {
		it(`creates user if doesn't exist one with that email`, async () => {
			const user = getUser(1);

			const result = await userService.register(user);

			expect(result.success).toBe(true);
			expect(result.data).not.toBeUndefined();
			expect(result.data).not.toBeNull();
		});

		it(`doesn't create user if exist one with that email`, async () => {
			const user = getUser(1);

			const result = await userService.register(user);

			expect(result.success).toBe(false);
		});

		it('generates email token', async () => {
			const user = await getDbUser();

			expect(user.emailToken).not.toBeUndefined();
			expect(user.emailToken).not.toBeNull();
			expect(user.emailToken.length).toBeGreaterThan(30);
		});

		it('sets confirmed to false', async () => {
			const user = await getDbUser();

			expect(user.confirmed).toBe(true);
		});
	});

	describe('changePassword', () => {
		it('changes password given the right current password', async () => {
			const newPassword = 'abc12345';
			const user = {
				email: getUser(1).email,
				currentPass: getUser(1).password,
				newPass: newPassword,
				confirmNewPass: newPassword,
			};

			const result = await userService.changePassword(user);

			expect(result.success).toBe(true);
		});

		it(`doesn't change password given the wrong current password`, async () => {
			const newPassword = 'abc12345';
			const user = {
				email: getUser(1).email,
				currentPass: 'abcabc',
				newPass: newPassword,
				confirmNewPass: newPassword,
			};

			const result = await userService.changePassword(user);

			expect(result.success).toBe(false);
		});
	});
});
