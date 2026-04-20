import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AwsCredentialService} from './aws-credential.service';
import {UpsertProjectAwsCredentialDto} from './aws-credential.dto';

@Controller('aws-credentials/projects')
export class AwsCredentialController {
  constructor(private readonly service: AwsCredentialService) {}

  @Get(':projectId')
  async getProjectCredential(@Param('projectId') projectId: string) {
    return await this.service.getProjectCredential(projectId);
  }

  @Put(':projectId')
  async upsertProjectCredential(
    @Param('projectId') projectId: string,
    @Body() body: UpsertProjectAwsCredentialDto
  ) {
    return await this.service.upsertProjectCredential(projectId, body);
  }

  @Post(':projectId/verify')
  async verifyProjectCredential(@Param('projectId') projectId: string) {
    return await this.service.verifyProjectCredential(projectId);
  }

  @Delete(':projectId')
  async deleteProjectCredential(@Param('projectId') projectId: string) {
    return await this.service.deleteProjectCredential(projectId);
  }
}
