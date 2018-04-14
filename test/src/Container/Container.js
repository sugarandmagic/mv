//@flow

import { connect } from 'react-redux';
import App from '../components/App';
import { toggleStarred, sortStarred } from '../actions';
import { getInfluencers, getSortOrder } from '../selectors/selectors';

const mapStateToProps = (state: Object = {}): Object => ({
    influencers: getInfluencers(state),
    sortOrder: getSortOrder(state)
});

const mapDispatchToProps = {
    toggleStarred,
    sortStarred,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
