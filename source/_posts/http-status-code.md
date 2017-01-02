---
title: Http常用状态码
date: 2016-12-15 18:21:11
categories: http
tags: 
    - http
---

> * 2XX：请求正常处理并返回
> * 3XX：重定向，请求的资源位置发生变化
> * 4XX：客户端发送的请求有错误
> * 5XX：服务器端错误

在 HTTP API 设计中，经常用到的状态码以及它们的意义如下表：
<!-- more -->

|状态码 | Label           | 解释  |
|------ |:---------------:| :----- |
| 200   | OK | 请求成功接收并处理，一般响应中都会有 body |
| 201   | Created | 请求已完成，并导致了一个或者多个资源被创建，最常用在 POST 创建资源的时候 |
| 202   | Accepted  | 请求已经接收并开始处理，但是处理还没有完成。一般用在异步处理的情况，响应 body 中应该告诉客户端去哪里查看任务的状态 |
| 204   | No Content | 请求已经处理完成，但是没有信息要返回，经常用在 PUT 更新资源的时候（客户端提供资源的所有属性，因此不需要服务端返回）。如果有重要的 metadata，可以放到头部返回 |
| 301   | Moved Permanently | 请求的资源已经永久性地移动到另外一个地方，后续所有的请求都应该直接访问新地址。服务端会把新地址写在 Location 头部字段，方便客户端使用。允许客户端把 POST 请求修改为 GET。 |
| 304   | Not Modified | 请求的资源和之前的版本一样，没有发生改变。用来缓存资源，和条件性请求（conditional request）一起出现 |
| 307   | Temporary Redirect | 目标资源暂时性地移动到新的地址，客户端需要去新地址进行操作，但是不能修改请求的方法。 |
| 308   | Permanent Redirect | 和 301 类似，除了客户端不能修改原请求的方法 |
| 400   | Bad Requests  | 客户端发送的请求有错误（请求语法错误，body 数据格式有误，body 缺少必须的字段等），导致服务端无法处理 |
| 401   | Unauthorized  | 请求的资源需要认证，客户端没有提供认证信息或者认证信息不正确 |
| 403   | Forbidden | 服务器端接收到并理解客户端的请求，但是客户端的权限不足。比如，普通用户想操作只有管理员才有权限的资源。 |
| 404   | Not Found | 客户端要访问的资源不存在，链接失效或者客户端伪造 URL 的时候回遇到这个情况 |
| 405   | Method Not Allowed | 服务端接收到了请求，而且要访问的资源也存在，但是不支持对应的方法。服务端必须返回 Allow 头部，告诉客户端哪些方法是允许的 |
| 415   | Unsupported Media Type    | 服务端不支持客户端请求的资源格式，一般是因为客户端在 Content-Type 或者 Content-Encoding 中申明了希望的返回格式，但是服务端没有实现。比如，客户端希望收到 xml返回，但是服务端支持 Json |
| 429   | Too Many Requests | 客户端在规定的时间里发送了太多请求，在进行限流的时候会用到 |
| 500   | Internal Server Error | 服务器内部错误，导致无法完成请求的内容 |
| 503   | Service Unavailable | 服务器因为负载过高或者维护，暂时无法提供服务。服务器端应该返回 Retry-After 头部，告诉客户端过一段时间再来重试 |

上面这些状态码覆盖了 API 设计中大部分的情况，如果对某个状态码不清楚或者希望查看更完整的列表，可以参考 [HTTP Status Code](https://httpstatuses.com/) 这个网站，或者 [RFC7231 Response Status Codes](https://tools.ietf.org/html/rfc7231#section-6) 的内容。
