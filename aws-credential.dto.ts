import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger';
import {ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, Matches} from 'class-validator';

const AWS_REGION_PATTERN = /^[a-z]{2}(-gov)?-[a-z]+-\d$/;

export class UpsertProjectAwsCredentialDto {
  @ApiProperty({description: 'AWS access key ID'})
  @IsNotEmpty()
  @IsString()
  accessKeyId: string;

  @ApiPropertyOptional({
    description: 'AWS secret access key. Optional when updating an existing credential (leave empty to keep current).',
  })
  @IsOptional()
  @IsString()
  secretAccessKey?: string;

  @ApiPropertyOptional({description: 'Optional default region. If omitted, falls back to the first region in regions[].'})
  @IsOptional()
  @IsString()
  @Matches(AWS_REGION_PATTERN)
  defaultRegion?: string;

  @ApiPropertyOptional({type: [String], example: ['us-east-1', 'ap-southeast-1']})
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsString({each: true})
  @Matches(AWS_REGION_PATTERN, {each: true})
  regions?: string[];
}
