/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.agentifybots.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/auth/*"],
};
