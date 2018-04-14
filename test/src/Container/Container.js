//@flow

import { connect } from 'react-redux';
import App from '../components/App';
import { toggleStarred } from '../actions';
import { getInfluencers } from '../selectors/selectors';

const mapStateToProps = (state: Object = {}): Object => ({
    influencers: getInfluencers(state),
});

const mapDispatchToProps = {
    toggleStarred,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
