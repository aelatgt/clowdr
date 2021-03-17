CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "job_queues"."CustomEmailJob"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "conferenceId" uuid NOT NULL, "attendeeIds" jsonb NOT NULL, "processed" boolean NOT NULL DEFAULT false, "htmlBody" text NOT NULL, "subject" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("conferenceId") REFERENCES "public"."Conference"("id") ON UPDATE cascade ON DELETE cascade);
CREATE OR REPLACE FUNCTION "job_queues"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_job_queues_CustomEmailJob_updated_at"
BEFORE UPDATE ON "job_queues"."CustomEmailJob"
FOR EACH ROW
EXECUTE PROCEDURE "job_queues"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_job_queues_CustomEmailJob_updated_at" ON "job_queues"."CustomEmailJob" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
