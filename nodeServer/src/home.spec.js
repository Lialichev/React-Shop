import {expect} from 'chai';
import sinon from 'sinon';

import {showMessage} from './home';

describe('showMessage', () => {

    let fakeAlert;

    beforeEach(() => {
        fakeAlert = sinon.stub(window, 'alert');
    });

    it('should alert', () => {
        showMessage();
        expect(fakeAlert.called).to.be.true;
    });

    it('should alert text', () => {
        let testText = 'test';
        showMessage(testText);
        expect(fakeAlert.getCall(0).args[0]).to.equal(testText);
    });
});
