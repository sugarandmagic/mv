import { expect, it } from '../common/test-common';
import { toggleStarred, sortStarred } from '../../actions';

describe('toggleStarred action', () => {
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

describe('sortStarred action', () => {
    it('should return a sortStarred action with the correct type', () => {
        const ret = sortStarred('foo,bar');
        expect(ret).to.have.property('type')
            .that.is.a('string')
            .that.equals('SORT_STARRED');
        expect(ret).to.have.property('sortKey')
            .that.is.a('string')
            .that.equals('foo,bar');
    });
});
