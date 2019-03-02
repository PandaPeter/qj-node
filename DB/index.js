/**
 * @author 潘亚楠
 * @date 2019/2/24
 * @information 创建mongodb服务
  */
import mongoose from 'mongoose';
import dbConf from './config.js';

export const dbInitPromise = mongoose.connect(dbConf.uri, dbConf.options);