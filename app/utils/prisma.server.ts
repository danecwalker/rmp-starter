// Copyright (c) 2023 DevDane <dane@danecwalker.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var __prisma__: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.__prisma__) {
    global.__prisma__ = new PrismaClient();
    global.__prisma__.$connect();
  }
  prisma = global.__prisma__;
}

export { prisma };
