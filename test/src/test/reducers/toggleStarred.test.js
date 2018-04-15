import { expect, it } from '../common/test-common';
import toggleStarred from '../../reducers/toggleStarred';

const mockState = [
    {
        'id': 543,
        'name': 'Joan Robertson',
        'instagram_username': 'j_robertson_lol',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/26.jpg',
        'followers': 16013,
        'engagement': '6.28',
        'starred': true,
    },
    {
        'id': 432,
        'name': 'Sharon Hopkins',
        'instagram_username': 'sharon_hopkins234',
        'instagram_profile_image':
        'https://randomuser.me/api/portraits/women/44.jpg',
        'followers': 37300,
        'engagement': '4.73',
        'starred': false
    }
];

describe('toggleStarred reducer', () => {
    it('should toggle the starred status on the correct influencer', () => {
        const ret = toggleStarred(mockState, { type: 'TOGGLE_STARRED', id: 432 });
        expect(ret.find((item) => item.id === 432)).to.have.property('starred', true);
        const ret2 = toggleStarred(mockState, { type: 'TOGGLE_STARRED', id: 432 });
        expect(ret.find((item) => item.id === 432)).to.have.property('starred', false)
    })
    it('should not toggle other existing ids', () => {
        const ret = toggleStarred(mockState, { type: 'TOGGLE_STARRED', id: 432 });
        expect(ret.find((item) => item.id === 543)).to.have.property('starred', true);
    })
    it('should do nothing if the id was not matched', () => {
        const ret = toggleStarred(mockState, { type: 'TOGGLE_STARRED', id: 999 });
        expect(ret).to.deep.equal(mockState)
    })
    it('should do nothing if the action type was not TOGGLE_STARRED', () => {
        const ret = toggleStarred(mockState, { type: 'SOMETHING_ELSE', id: 999 });
        expect(ret).to.deep.equal(mockState)
    })
})
