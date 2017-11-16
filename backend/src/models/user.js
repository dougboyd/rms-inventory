/**
 * User Model
 * @param sequelize
 * @param DataTypes
 * @returns {*}
 */

/*
 const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const randomToken = require('rand-token');
const RabbitMqMessageService = require('../utils/RabbitMqMessageService.js');
*/
const config = require('../config/config.json');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
   /* 
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      allowNull: false,
      comment: 'The incremental ID. This changes over time, while the key remains the same.',
    },
    user_key: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
      comment: 'Unique Code'
    },
    record_status_key: {
      type: Sequelize.STRING(50),
      allowNull: false,
      comment: 'Active/Inactive for this record',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
*/

    // Virtuals
    /*
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        if (this.firstName && this.lastName) {
          return `${this.firstName} ${this.lastName}`;
        } else if (this.firstName) {
          return this.firstName;
        } else if (this.lastName) {
          return this.lastName;
        }
        return '';
      },
      comment: 'Users full name',
    },
    primaryAddress: {
      type: DataTypes.VIRTUAL,
      async get() {
        const addresses = await this.getUser_addresses();
        if (addresses && addresses.length > 0) {
          return addresses.find(address => address.addressTypeCd === 'PRIMARY');
        }
        return null;
      },
      comment: 'User\'s primary address',
    },
    primaryPhone: {
      type: DataTypes.VIRTUAL,
      async get() {
        const phones = await this.getUser_phones();
        if (phones && phones.length > 0) {
          const primary = phones.filter(phone => phone.isPrimaryYn === 'Y');
          if (primary && primary.length > 0) {
            return primary[0].phoneNumberTxt;
          }
        }
        return null;
      },
      comment: 'User\'s primary phone',
    },
    */
  }, {
      classMethods: {
        associate(models) {
          // This doesn't imply a hard connection between region <-> user, needed for email sendout
          /*
          User.belongsTo(models.region, {
            foreignKey: { field: 'registeredRegionId', allowNull: false, defaultValue: 1 },
            as: 'registeredRegion',
          });
          User.hasMany(models.user_authentication);
          User.hasMany(models.professional_details);
          User.hasMany(models.user_listing_favourite, { as: 'favourites' });
          User.hasMany(models.entitlement, { as: 'entitlements' });
          User.hasMany(models.entitlement_view, { as: 'entitlement_views' });
          User.hasMany(models.homepack, { foreignKey: 'ownerUserUuid' });
          User.hasMany(models.user_address, { as: 'user_addresses' });
          User.hasMany(models.user_phone, { as: 'user_phones' });
          User.hasMany(models.user_email, { as: 'user_emails' });
          User.hasMany(models.payment_token);
          User.hasMany(models.event, { foreignKey: 'creatorUuid', as: 'created_events' });
          User.hasMany(models.event, { foreignKey: 'organiserUuid', as: 'organised_events' });
          User.hasMany(models.event_attendance, { foreignKey: 'attendeeUuid' });
          User.hasMany(models.team, { foreignKey: 'createdByUserUuid', as: 'teams' });
          */
          console.log('do nothing');
        },
      },

      instanceMethods: {
        /**
         * Checks if the user is verified in a region
         * @param {object} regionOb region to check
         * @return {boolean}
        isVerified(regionOb) {
          return sequelize.models.entitlement.getEntitlements(this, regionOb)
            .then(entitlements => entitlements && entitlements.indexOf('verified_user') !== -1);
        },
         */

        /**
         * Checks if the user is a registered solicitor
         * @param {object} regionOb region to check
         * @return {boolean}
        isRegisteredSolicitor(regionOb) {
          return sequelize.models.entitlement.getEntitlements(this, regionOb)
            .then(entitlements => entitlements && entitlements.indexOf('registered_solicitor') !== -1);
        },
         */

        /**
         * Checks if the user is a registered solicitor
         * @param {object} regionOb region to check
         * @return {boolean}
        isRealEstateAgent(regionOb) {
          return sequelize.models.entitlement.getEntitlements(this, regionOb)
            .then(entitlements => entitlements && entitlements.indexOf('real_estate_agent') !== -1);
        },
         */

        /**
         * Checks if the user is an administrator
         * @param {object} regionOb region to check
         * @return {boolean}
        isAdmin(regionOb) {
          return sequelize.models.entitlement.getEntitlements(this, regionOb)
            .then(entitlements => entitlements && entitlements.indexOf('administrator') !== -1);
        },
         */

        /**
         * Checks if the user is a customer service rep
         * @param {object} regionOb region to check
         * @return {boolean}
        isCustomerService(regionOb) {
          return sequelize.models.entitlement.getEntitlements(this, regionOb)
            .then(entitlements => entitlements && entitlements.indexOf('customer_service') !== -1);
        },
         */

        /**
         * Checks if the user has an active local strategy
         * @return {boolean}
        hasLocalStrategy() {
          return this.getUser_authentications({ where: { loginStrategyCd: 'local', statusCd: 'ACTIVE' } })
            .then(auth => auth && auth.length === 1);
        },
         */


        /**
         * Gets the user's phone number
         * @param {string} phoneType Get phone (optionally get phone types). NULL = default
        getPhoneWithType(phoneType = null) {
          return sequelize.models.user_phone.getFromUserWithType(this.uuid, phoneType);
        },
         */

        /**
         * Add a phone
         * @param {string} phoneTypeCd Phone Type Code
         * @param {string} phoneNumberTxt Phone Number
         * @param {boolean} isPrimaryYn Is this the primary phone (Y/N)?
         * @return {Promise} SequelizeInstance
        addPhone(phoneTypeCd, phoneNumberTxt, isPrimaryYn, transaction = null) {
          return sequelize.models.user_phone.addPhoneToUser(
            this.uuid,
            phoneTypeCd,
            phoneNumberTxt,
            isPrimaryYn,
            transaction,
          );
        },
         */

      },
    });

  return User;
};
