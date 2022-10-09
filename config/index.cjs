/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx286a9e2bd61fafa3',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '240359598c4893d8a16933e7c74d3da4',

  PROVINCE: '山东',
  CITY: '济南',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxoPO6sDUHU7lG_KjIE0wwutwn0w',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EFrsw-lsc405IpFOYN9wdHBalgBpXVdZT6HHXPZdNc0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '11-13',
        },
        {
          type: '*生日', name: '老公', year: '1996', date: '10-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 恋爱的日子
        { keyword: 'love_day', date: '2021-10-17' },
        // 相识纪念日
        { keyword: 'meet_day', date: '2015-12-24' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxoPO6lvKMwkf8Fe9xrussv7dFUg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EFrsw-lsc405IpFOYN9wdHBalgBpXVdZT6HHXPZdNc0',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '11-13',
        },
        {
          type: '*生日', name: '老公', year: '1996', date: '10-29',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 恋爱的日子
        { keyword: 'love_day', date: '2021-10-17' },
        // 相识纪念日
        { keyword: 'meet_day', date: '2015-12-24' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'YY28la2ILRUuK7bf-2GFCV3JJsZZ-rgs6tfGmKRI_r8',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxoPO6lvKMwkf8Fe9xrussv7dFUg',
    }
  ],

}

module.exports = USER_CONFIG

