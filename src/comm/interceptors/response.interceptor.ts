import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        return next.handle().pipe(
            map((data) => {
                const statusCode = response.statusCoede
                return {
                    statusCode: statusCode,
                    message: request.method === 'GET'
                        ? 'اطلاعات با موفقیت دریافت شد'
                        : request.method === 'POST'
                            ? 'اطلاعات با موفقیت ثبت شد'
                            : request.method === 'PUT'
                                ? 'اطلاعات با موفقیت بروزرسانی شد'
                                : request.method === 'DELETE'
                                    ? 'اطلاعات با موفقیت حذف شد'
                                    : 'عملیات موفقیت‌آمیز بود',
                    error: null,
                    data,
                };
            }),
        );
    }
}