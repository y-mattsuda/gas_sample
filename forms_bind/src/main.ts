const prop = PropertiesService.getScriptProperties().getProperties();

const SLACK_API_TOKEN = prop.SLACK_API_TOKEN;

export function print_slack_api_token() {
  console.log(SLACK_API_TOKEN);
}
