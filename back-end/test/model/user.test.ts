import { User } from "../../model/user";
import { Profile } from "../../model/profile";

const username = 'admin'
const password = 'passwordd'
const role = 'admin'
const profile = new Profile({
    firstName: 'Alice',
    lastName: 'Anderson',
    email: 'alice.admin@example.com',
    phoneNumber: '123-456-7890',
    birthDate: '1985-06-12'})

test('given: valid values for user, when: user is created, then: users is created with those values', () => {
    // given

    // when
    const user = new User({ 
        username: username,
        password: password,
        role: role, 
        profile:profile}) 

    // then
    expect(user.getUsername()).toEqual(username);
    expect(user.getPassword()).toEqual(password);
    expect(user.getRole()).toEqual(role);
    expect(user.getProfile()).toEqual(profile);

});

test('given: invalid username for user, when: user is created, then: users is created with those values', () => {
    // given

    // when
    const user = () =>{
        new User({ 
        username: '',
        password: password,
        role: role, 
        profile:profile})}

    // then
    expect(user).toThrow('Username is required');        

});

