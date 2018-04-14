import { expect, it } from '../test-common';
import { toggleStarred } from '../../actions';

describe('actions - toggleStarred', () => {
    it('should return a toggleStarred action with the correct type', () => {
        const ret = toggleStarred(123);
        expect(ret).to.have.property('type')
            .that.is.a('string')
            .that.equals('TOGGLE_STARRED');
        expect(ret).to.have.property('id')
            .that.is.a('number')
            .that.equals(123);
    });
});
