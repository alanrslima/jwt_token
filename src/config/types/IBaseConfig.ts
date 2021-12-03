export interface IBaseConfig {
  readonly sentry_url: string;
  readonly dataservice_url: string;
  readonly max_request_size: number;
  readonly tenant_id: string;
  readonly partition_key: string;
}
