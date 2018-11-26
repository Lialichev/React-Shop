import {expect} from 'chai';
import sinon from 'sinon';

import Person, {getUsers} from './Person';

describe('Person', () => {
    let person;

    beforeEach(() => {
        person = new Person();
    });

    it('should set name on creation', () => {
        const name = 'test';
        const person = new Person(name);

        expect(person.name).to.equal(name);
    });

    it('should date is date', () => {
        expect(person.creation).to.be.instanceOf(Date);
    });

    it('should return "night child" if hour = 23', () => {
        person.creation.setHours(23);
        expect(person.getCreation()).to.equal('night child');
    });
});

describe('getUsers', () => {
    it('should call fetch', (done) => {
        const fakeFetch = sinon.stub(window, 'fetch');
        const fakeLog = sinon.stub(console, 'log');

        fakeFetch.returns(Promise.resolve({
            json() {
                return 'test';
            }
        }));

        getUsers()
            .then(() => {
                expect(fakeLog.called).to.be.true;
                done();
            });

        expect(fakeFetch.called).to.be.true;

    });
});