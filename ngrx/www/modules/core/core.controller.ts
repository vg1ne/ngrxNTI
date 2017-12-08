import { Controller, Get, Post } from '@nestjs/common';
import { siteProfileData } from '../../db-mock/core/core';

@Controller('/admin/api')
export class CoreController {
  @Get('GetSiteProfileData')
  GetSiteProfileData() {
    return siteProfileData;
  }
}
