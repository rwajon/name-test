import React, { Component } from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import { connect } from './node_modules/react-redux';
import * as helper from '../../helpers';
import LeaveGame from './LeaveGame/LeaveGame';
import Logout from '../Logout/Logout';
import Room from './Room/Room';
import defaultPicture from '../../assets/images/profile_plaholder.png';
import '../../assets/css/style.scss';
import './Profile.scss';

export class Profile extends Component {
  render() {
    const { profile, attempts } = this.props;
    return (
      <div className="container">
        <div className="row shadow-3 black-opacity-3 radius-4 text-white">
          <div className="grabProfileImage center">
            <img
              src={profile.image || defaultPicture}
              className="center shadow-4"
              alt="Profile"
            />
          </div>
          <div className="card no-margin center-align">
            <h1 className="no-margin medium-text">
              {profile.firstName} {profile.lastName}
            </h1>
          </div>
          <div className="clear" />
          <div className="medium-padding center-align">
            Geography: {helper.getScore(attempts.geography)} / 10
            <br />
            <br />
            Computing: {helper.getScore(attempts.computing)} / 10
          </div>
          <div className="clear" />
          <Logout />
          <LeaveGame />
          <Room />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { profile }, game: { attempts } }) => ({
  profile,
  attempts
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  null
)(Profile);
