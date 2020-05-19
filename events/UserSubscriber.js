class UserSubscriber {
	contructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	onUserSignUp() {}

	onUserSignIn() {}
}

module.exports = UserSubscriber;
