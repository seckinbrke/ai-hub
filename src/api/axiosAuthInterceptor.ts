export default function authInterceptor(instance: any) {
  instance.interceptors.request.use(async (config: {headers: any}) => {
    Object.assign(config.headers, {
      api_key: 'd2e621a6646a4211768cd68e26f21228a81',
    });
    return config;
  });
}
