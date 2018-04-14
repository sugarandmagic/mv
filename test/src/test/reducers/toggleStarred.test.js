import { expect, it } from '../test-common';
import toggleStarred from '../../reducers/toggleStarred';

const mockState = [
    {
        'influencer_id': 543,
        'influencer_full_name': 'Joan Robertson',
        'influencer_instagram_username': 'j_robertson_lol',
        'influencer_instagram_profile_image':
        'https://randomuser.me/api/portraits/women/26.jpg',
        'statistics': {
            'followers': 16013,
            'engagement': '6.28'
        }
    },
    {
        'influencer_id': 432,
        'influencer_full_name': 'Sharon Hopkins',
        'influencer_instagram_username': 'sharon_hopkins234',
        'influencer_instagram_profile_image':
        'https://randomuser.me/api/portraits/women/44.jpg',
        'statistics': {
            'followers': 37300,
            'engagement': '4.73'
        }
    }
]

describe('toggleStarred reducer', () => {
    it('should toggle the starred status on the correct influencer', () => {
        const ret = toggleStarred(mockState, { type: 'TOGGLE_STARRED', id: 432 });
        expect(ret.find((item) => item.influencer_id === 432)).to.have.property('starred', true);
        const ret2 = toggleStarred(mockState, { type: 'TOGGLE_STARRED', id: 432 });
        expect(ret.find((item) => item.influencer_id === 432)).to.have.property('starred', false)
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
