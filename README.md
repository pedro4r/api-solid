# App

*GymPass-style app*

## Functional Requirements (RFs)
- [x] It must be possible to register
- [x] It must be possible to authenticate
- [x] It must be possible to obtain the profile of a logged-in user
- [x] It must be possible to obtain the number of check-ins performed by the logged-in user
- [x] It must be possible for the user to retrieve the check-in history
- [x] It must be possible for the user to search for nearby gyms (up to 10km)
- [x] It must be possible for the user to search for gyms by name
- [x] It must be possible for the user to check in at a gym
- [x] It must be possible to validate a user's check-in
- [x] It must be possible to register a gym

## Non-functional Requirements (RNs)
- [x] The user must not be able to register with a duplicate email
- [x] The user cannot make two check-ins on the same day
- [x] The user cannot check in if not close (100m) to the gym
- [x] The check-in can only be validated up to 20 minutes after creation
- [ ] The check-in can only be validated by administrators
- [ ] The gym can only be registered by administrators

## Non-functional Requirements (RNFs)
- [x] The user's password needs to be encrypted
- [x] The application's data needs to be persisted in a PostgresSQL database
- [x] All data lists need to be paginated with 20 items per page
- [ ] The user must be identified by a JWT (JSON WEB Token)