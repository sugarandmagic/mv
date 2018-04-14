//@flow

import { connect } from 'react-redux';
import App from '../components/App';
import { toggleStarred } from '../actions';

const mapStateToProps = (state: Object = {}): Object => ({
    influencers: state.influencers,
});

const mapDispatchToProps = (): Object => ({
    toggleStarred,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
