import { Controller, Get, Post } from '@nestjs/common';
import { coreData } from '../../db-mock/core/core';

@Controller('/admin/api')
export class CoreController {
  @Get('GetSiteProfileData')
  GetSiteProfileData() {
    return coreData;
  }
}
