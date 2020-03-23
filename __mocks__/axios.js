const axios = jest.genMockFromModule("axios");

/* const mockData = [
  { name: "company_size", type: "string" },
  { name: "date_of_birth", type: "string" },
  { name: "days_to_close", type: "number" },
  { name: "degree", type: "string" },
  { name: "field_of_study", type: "string" },
  { name: "first_conversion_date", type: "datetime" },
  { name: "first_conversion_event_name", type: "string" },
  { name: "first_deal_created_date", type: "datetime" },
  { name: "gender", type: "string" },
  { name: "graduation_date", type: "string" },
  { name: "hs_additional_emails", type: "enumeration" },
  { name: "hs_all_contact_vids", type: "enumeration" },
  { name: "hs_analytics_first_touch_converting_campaign", type: "string" },
  { name: "hs_analytics_last_touch_converting_campaign", type: "string" },
  { name: "hs_avatar_filemanager_key", type: "string" },
  { name: "hs_calculated_form_submissions", type: "enumeration" },
  { name: "hs_calculated_merged_vids", type: "enumeration" },
  { name: "hs_calculated_mobile_number", type: "string" },
  { name: "hs_calculated_phone_number", type: "string" },
  { name: "hs_calculated_phone_number_area_code", type: "string" },
  { name: "hs_calculated_phone_number_country_code", type: "string" },
  { name: "hs_calculated_phone_number_region_code", type: "string" },
  { name: "hs_content_membership_email_confirmed", type: "bool" },
  { name: "hs_content_membership_notes", type: "string" },
  { name: "hs_content_membership_registered_at", type: "datetime" },
  { name: "hs_content_membership_registration_domain_sent_to", type: "string" },
  {
    name: "hs_content_membership_registration_email_sent_at",
    type: "datetime"
  },
  { name: "hs_content_membership_status", type: "enumeration" },
  { name: "hs_conversations_visitor_email", type: "string" },
  { name: "hs_created_by_conversations", type: "bool" },
  { name: "hs_created_by_user_id", type: "string" },
  { name: "hs_createdate", type: "datetime" },
  { name: "hs_document_last_revisited", type: "datetime" },
  { name: "hs_email_domain", type: "string" },
  { name: "hs_email_quarantined", type: "bool" },
  { name: "hs_email_quarantined_reason", type: "enumeration" },
  { name: "hs_email_recipient_fatigue_recovery_time", type: "datetime" },
  { name: "hs_email_sends_since_last_engagement", type: "number" },
  { name: "hs_emailconfirmationstatus", type: "enumeration" },
  { name: "hs_facebook_ad_clicked", type: "bool" },
  { name: "hs_feedback_last_nps_follow_up", type: "string" },
  { name: "hs_feedback_last_nps_rating", type: "enumeration" },
  { name: "hs_feedback_last_survey_date", type: "datetime" },
  { name: "hs_feedback_show_nps_web_survey", type: "bool" },
  { name: "hs_google_click_id", type: "string" },
  { name: "hs_ip_timezone", type: "string" },
  { name: "hs_is_contact", type: "bool" },
  { name: "hs_last_sales_activity_date", type: "datetime" },
  { name: "hs_lastmodifieddate", type: "datetime" },
  { name: "hs_lead_status", type: "enumeration" },
  { name: "hs_legal_basis", type: "enumeration" },
  { name: "hs_merged_object_ids", type: "enumeration" },
  { name: "hs_object_id", type: "number" },
  { name: "hs_predictivecontactscore_v2", type: "number" },
  { name: "hs_predictivescoringtier", type: "enumeration" },
  { name: "hs_sales_email_last_clicked", type: "datetime" },
  { name: "hs_sales_email_last_opened", type: "datetime" },
  {
    name: "hs_searchable_calculated_international_mobile_number",
    type: "phone_number"
  },
  {
    name: "hs_searchable_calculated_international_phone_number",
    type: "phone_number"
  },
  { name: "hs_searchable_calculated_mobile_number", type: "phone_number" },
  { name: "hs_searchable_calculated_phone_number", type: "phone_number" },
  { name: "hs_sequences_is_enrolled", type: "bool" },
  { name: "hs_updated_by_user_id", type: "string" },
  { name: "hubspot_owner_assigneddate", type: "datetime" },
  { name: "ip_city", type: "string" },
  { name: "ip_country", type: "string" },
  { name: "ip_country_code", type: "string" },
  { name: "ip_latlon", type: "string" },
  { name: "ip_state", type: "string" },
  { name: "ip_state_code", type: "string" },
  { name: "ip_zipcode", type: "string" },
  { name: "job_function", type: "string" },
  { name: "lastmodifieddate", type: "datetime" },
  { name: "marital_status", type: "string" },
  { name: "military_status", type: "string" },
  { name: "num_associated_deals", type: "number" },
  { name: "num_conversion_events", type: "number" },
  { name: "num_unique_conversion_events", type: "number" },
  { name: "recent_conversion_date", type: "datetime" },
  { name: "recent_conversion_event_name", type: "string" },
  { name: "recent_deal_amount", type: "number" },
  { name: "recent_deal_close_date", type: "datetime" },
  { name: "relationship_status", type: "string" },
  { name: "school", type: "string" },
  { name: "seniority", type: "string" },
  { name: "start_date", type: "string" },
  { name: "test_date", type: "date" },
  { name: "test_key", type: "string" },
  { name: "test_prop", type: "string" },
  { name: "test_property", type: "string" },
  { name: "total_revenue", type: "number" },
  { name: "work_email", type: "string" },
  { name: "firstname", type: "string" },
  { name: "hs_analytics_first_url", type: "string" },
  { name: "hs_email_delivered", type: "number" },
  { name: "hs_email_optout_7283808", type: "enumeration" },
  { name: "twitterhandle", type: "string" },
  { name: "currentlyinworkflow", type: "enumeration" },
  { name: "hs_analytics_last_url", type: "string" },
  { name: "hs_email_open", type: "number" },
  { name: "fax", type: "string" },
  { name: "hs_analytics_first_timestamp", type: "datetime" },
  { name: "hs_email_last_email_name", type: "string" },
  { name: "hs_email_last_send_date", type: "datetime" },
  { name: "address", type: "string" },
  { name: "engagements_last_meeting_booked", type: "datetime" },
  { name: "engagements_last_meeting_booked_campaign", type: "string" },
  { name: "engagements_last_meeting_booked_medium", type: "string" },
  { name: "engagements_last_meeting_booked_source", type: "string" },
  { name: "hs_analytics_first_visit_timestamp", type: "datetime" },
  { name: "hs_email_last_open_date", type: "datetime" },
  { name: "hs_sales_email_last_replied", type: "datetime" },
  { name: "hubspot_owner_id", type: "enumeration" },
  { name: "notes_last_contacted", type: "datetime" },
  { name: "notes_last_updated", type: "datetime" },
  { name: "notes_next_activity_date", type: "datetime" },
  { name: "num_contacted_notes", type: "number" },
  { name: "num_notes", type: "number" },
  { name: "surveymonkeyeventlastupdated", type: "number" },
  { name: "webinareventlastupdated", type: "number" },
  { name: "city", type: "string" },
  { name: "hs_analytics_last_timestamp", type: "datetime" },
  { name: "hs_email_last_click_date", type: "datetime" },
  { name: "hubspot_team_id", type: "enumeration" },
  { name: "hs_all_owner_ids", type: "enumeration" },
  { name: "hs_analytics_last_visit_timestamp", type: "datetime" },
  { name: "hs_email_first_send_date", type: "datetime" },
  { name: "state", type: "string" },
  { name: "hs_all_team_ids", type: "enumeration" },
  { name: "hs_analytics_source", type: "enumeration" },
  { name: "hs_email_first_open_date", type: "datetime" },
  { name: "zip", type: "string" },
  { name: "country", type: "string" },
  { name: "hs_all_accessible_team_ids", type: "enumeration" },
  { name: "hs_analytics_source_data_1", type: "string" },
  { name: "hs_email_first_click_date", type: "datetime" },
  { name: "hs_analytics_source_data_2", type: "string" },
  { name: "hs_email_is_ineligible", type: "bool" },
  { name: "hs_language", type: "enumeration" },
  { name: "hs_analytics_first_referrer", type: "string" },
  { name: "jobtitle", type: "string" },
  { name: "hs_analytics_last_referrer", type: "string" },
  { name: "message", type: "string" },
  { name: "closedate", type: "datetime" },
  { name: "hs_analytics_average_page_views", type: "number" },
  { name: "hs_analytics_revenue", type: "number" },
  { name: "hs_lifecyclestage_lead_date", type: "datetime" },
  { name: "hs_lifecyclestage_marketingqualifiedlead_date", type: "datetime" },
  { name: "hs_lifecyclestage_opportunity_date", type: "datetime" },
  { name: "lifecyclestage", type: "enumeration" },
  { name: "hs_lifecyclestage_salesqualifiedlead_date", type: "datetime" },
  { name: "createdate", type: "datetime" },
  { name: "hs_lifecyclestage_evangelist_date", type: "datetime" },
  { name: "hs_lifecyclestage_customer_date", type: "datetime" },
  { name: "hubspotscore", type: "number" },
  { name: "company", type: "string" },
  { name: "hs_lifecyclestage_subscriber_date", type: "datetime" },
  { name: "hs_lifecyclestage_other_date", type: "datetime" },
  { name: "website", type: "string" },
  { name: "numemployees", type: "enumeration" },
  { name: "annualrevenue", type: "string" },
  { name: "industry", type: "string" },
  { name: "associatedcompanyid", type: "number" },
  { name: "associatedcompanylastupdated", type: "number" },
  { name: "hs_predictivecontactscorebucket", type: "enumeration" },
  { name: "hs_predictivecontactscore", type: "number" }
]; */

const urlDirectoryMap = {
  "api.hubapi.com": "hs",
  "zendesk.com": "zendesk"
};

const fs = require("fs");
const path = require("path");

function getData(url) {
  let directory = "";
  Object.keys(urlDirectoryMap).forEach(key => {
    if (url.includes(key)) {
      directory = urlDirectoryMap[key];
    }
  });
  const dataFile = fs.readFileSync(
    path.resolve(__dirname, `./data/${directory}/response.json`)
  );
  const data = JSON.parse(dataFile);
  return data[url];
}

function get(url) {
  const mockData = getData(url);
  return new Promise((resolve, reject) => {
    resolve({ data: mockData });
  });
}

function post(url, payload, config) {
  const mockData = getData(url);
  return new Promise((resolve, reject) => {
    resolve({ data: mockData });
  });
}
axios.get = get;
axios.post = post;
module.exports = axios;
