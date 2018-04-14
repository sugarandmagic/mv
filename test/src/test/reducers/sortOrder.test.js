import { expect, it } from '../common/test-common';
import sortOrder from '../../reducers/sortOrder';

describe('sortOrder reducer', () => {
    it('should return an array containing sortField and order if both are provided', () => {
        const ret = sortOrder({}, { type: 'SORT_STARRED', sortKey: 'foo,bar' });
        expect(ret).to.be.an.instanceOf(Array);
        expect(ret[0]).to.equal('foo');
        expect(ret[1]).to.equal('bar')
    })
    it('should return an array containing sortField only if one is provided', () => {
        const ret = sortOrder({}, { type: 'SORT_STARRED', sortKey: 'baz' });
        expect(ret[0]).to.equal('baz');
        expect(ret[1]).to.equal(undefined);
    })
    it('should return an empty array if none provided', () => {
        const ret = sortOrder({}, { type: 'SORT_STARRED' });
        expect(ret).to.deep.equal([])
    })
})
