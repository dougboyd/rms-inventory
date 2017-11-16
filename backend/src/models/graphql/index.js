import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// Models
const allModelsTxt = [
/*
  'role',
  'entitlement',
  'user',
  'admin_user_listing',
  'buyer_type',
  'language_translation',
  'property',
  'media_type',
  'media',
  'question',
  'event_attendance',
  'event_schedule_request',
  'event',
  'listing',
  'region',
  'region_domain',
  'ideal_match',
  'invitation',
  'notification',
  'homepack',
  'admin_approval',
  'user_extended',
  'product',
  'extra',
  'invoice',
  'order',
  'user_contact',
  'user_phone',
  'user_email',
  'user_address',
  'team_member',
  'team',
  'property_nearby_place',
  'offer',
  'auction_bid',
  'auction_registration',
  'auction',
  'property_category',
  'form_template',
  'user_listing_favourite',
  'suburb',
  'property_amenity_lookup',
  'property_feature_lookup',
  'rental_application',
  'rental_profile',
  'preregistration',
  'professional_details',
  'workplace_solicitor',
  'auction_participant',
  'realme_verification',
  'homepack_csv_import',
*/
];

const allModels = {};
allModelsTxt.forEach((modelTxt) => {
  allModels[modelTxt] = require('./' + modelTxt); // eslint-disable-line
});

// Queries
const allQueriesTxt = [
 /*
  'region',
  'region_domains',
  'properties',
  'property',
  'listing',
  'media',
  'me',
  'admin_user_listing',
  'search',
  'search_ideal_match',
  'ideal_match',
  'ideal_matches',
  'invitations',
  'people_directory_search',
  'people_interacted_search',
  'notifications',
  'notifications_count_new',
  'homepack',
  'people_directory_search',
  'people_interacted_search',
  'admin_approvals',
  'event',
  'products',
  'team',
  'teams',
  'permissions',
  'auction',
  'property_categories',
  'ideal_match_compare_list',
  'form_template',
  'user_listing_favourites',
  'suburb_search',
  'property_amenity_lookup',
  'property_feature_lookup',
  'auction_autobid',
  'rental_profile',
  'professional_details',
  'preregistration',
  'rental_application',
  'rental_applications',
  'workplace_solicitor',
  'admin_user',
  'offer_applications',
  'auction_applications',
  'user_validate_reset_password_token',
  'docusign_send',
  'realme_verification',
  'homepack_csvs',
  'homepack_csv',
*/
];

// Mutations
const allMutationsDef = {
 /*
  user_register: 'user_register',
  user_confirm_email: 'user_confirm_email',
  user_listing_favourite_toggle: 'user_listing_favourite',
  user_profile_update: 'user_profile_update',
  user_change_password: 'user_change_password',
  user_reset_password: 'user_reset_password',
  user_generate_reset_password_token: 'user_generate_reset_password_token',
  invitation_create: 'invitation_create',
  invitation_action: 'invitation_action',
  ideal_match_save: 'ideal_match_save',
  ideal_match_update: 'ideal_match_update',
  ideal_match_delete: 'ideal_match_delete',
  media_upload: 'media_upload',
  media_associate: 'media_associate',
  media_associate_overwrite: 'media_associate_overwrite',
  media_update: 'media_update',
  notification_acknowledge: 'notification_acknowledge',
  notification_mark_all_read: 'notification_mark_all_read',
  notification_mark_read: 'notification_mark_read',
  media_delete: 'media_delete',
  homepack_create: 'homepack_create',
  homepack_update: 'homepack_update',
  homepack_data_upload: 'homepack_data_upload',
  homepack_csv_delete: 'homepack_csv_delete',
  homepack_delete: 'homepack_delete',
  homepack_publish: 'homepack_publish',
  homepack_close: 'homepack_close',
  homepack_submit_for_approval: 'homepack_submit_for_approval',
  invoice_create: 'invoice_create',
  offer_action: 'offer_action',
  payment_save: 'payment_save',
  admin_approval_action: 'admin_approval_action',
  event_create: 'event_create',
  event_update: 'event_update',
  event_cancel: 'event_cancel',
  event_attendance_create: 'event_attendance_create',
  event_attendance_update: 'event_attendance_update',
  event_schedule_request_create: 'event_schedule_request_create',
  team_create: 'team_create',
  team_update: 'team_update',
  team_leave: 'team_leave',
  team_remove_member: 'team_remove_member',
  question_create: 'question_create',
  question_respond: 'question_respond',
  question_update: 'question_update',
  auction_create: 'auction_create',
  auction_bid: 'auction_bid',
  ideal_match_compare_list_create: 'ideal_match_compare_list_create',
  invoice_regenerate_payment_url: 'invoice_regenerate_payment_url',
  ideal_match_compare_list_delete: 'ideal_match_compare_list_delete',
  form_template_submission: 'form_template_submission',
  auction_autobid_create: 'auction_autobid_create',
  auction_autobid_delete: 'auction_autobid_delete',
  rental_profile_update: 'rental_profile_update',
  rental_application_action: 'rental_application_action',
  rental_application_update_media: 'rental_application_update_media',
  professional_details_update: 'professional_details_update',
  language_translation_update: 'language_translation_update',
  admin_entitlement_region_update: 'admin_entitlement_region_update',
  listing_register_share: 'listing_register_share',
  listing_report: 'listing_report',
  realme_verification_create: 'realme_verification_create',
  realme_verify_user: 'realme_verify_user',
  realme_reject_user: 'realme_reject_user',
  import_homepack_from_existing_csv: 'import_homepack_from_existing_csv',
*/
};

module.exports = (models) => {
  const graphqlModels = {};
  const getGraphModel = modelName => graphqlModels[modelName];

  const initModel = (modelInitFunction) => {
    const model = modelInitFunction(models, getGraphModel);
    graphqlModels[model.name] = model;
  };

  // We initialize the models in the order of dependencies
  /*
  */
  allModelsTxt.forEach((modelTxt) => {
    initModel(allModels[modelTxt]);
  });

  // Construct the queries
  const queryFields = {};
  allQueriesTxt.forEach((queryTxt) => {
    queryFields[queryTxt] = require('./queries/' + queryTxt)(models, graphqlModels); // eslint-disable-line
  });

  // Construct the mutations
  /*
  const mutationFields = {};
  Object.keys(allMutationsDef).forEach((mutationKey) => {
    mutationFields[mutationKey] = require('./mutations/' + allMutationsDef[mutationKey])(models, graphqlModels); // eslint-disable-line
  });
*/

  // A root schema for GraphQL, the nodes can be requested via /api/graphql queries
    /*
  const schema = new GraphQLSchema({
    // All root queries:
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: queryFields,
    }),
    // Mutations:
    mutation: new GraphQLObjectType({
      name: 'mutations',
      description: 'These are the things we can change',
      fields: mutationFields,
    }),
  });
    */
  /*

  return { models: graphqlModels, schema };
*/
};
