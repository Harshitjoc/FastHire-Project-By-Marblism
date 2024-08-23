/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.EmailTemplateInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailTemplate.createMany(input as any))),

        create: procedure.input($Schema.EmailTemplateInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailTemplate.create(input as any))),

        deleteMany: procedure.input($Schema.EmailTemplateInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailTemplate.deleteMany(input as any))),

        delete: procedure.input($Schema.EmailTemplateInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailTemplate.delete(input as any))),

        findFirst: procedure.input($Schema.EmailTemplateInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).emailTemplate.findFirst(input as any))),

        findMany: procedure.input($Schema.EmailTemplateInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).emailTemplate.findMany(input as any))),

        findUnique: procedure.input($Schema.EmailTemplateInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).emailTemplate.findUnique(input as any))),

        updateMany: procedure.input($Schema.EmailTemplateInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailTemplate.updateMany(input as any))),

        update: procedure.input($Schema.EmailTemplateInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailTemplate.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EmailTemplateCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailTemplateCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailTemplateCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailTemplateCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EmailTemplateCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailTemplateCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailTemplateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailTemplateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailTemplateCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailTemplateCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailTemplateGetPayload<T>, Context>) => Promise<Prisma.EmailTemplateGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EmailTemplateDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailTemplateDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailTemplateDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailTemplateDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EmailTemplateDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailTemplateDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailTemplateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailTemplateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailTemplateDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailTemplateDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailTemplateGetPayload<T>, Context>) => Promise<Prisma.EmailTemplateGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EmailTemplateFindFirstArgs, TData = Prisma.EmailTemplateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmailTemplateFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmailTemplateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailTemplateFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmailTemplateFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmailTemplateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmailTemplateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EmailTemplateFindManyArgs, TData = Array<Prisma.EmailTemplateGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.EmailTemplateFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EmailTemplateGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailTemplateFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmailTemplateFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EmailTemplateGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EmailTemplateGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EmailTemplateFindUniqueArgs, TData = Prisma.EmailTemplateGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmailTemplateFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmailTemplateGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailTemplateFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmailTemplateFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmailTemplateGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmailTemplateGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EmailTemplateUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailTemplateUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailTemplateUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailTemplateUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EmailTemplateUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailTemplateUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailTemplateGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailTemplateGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailTemplateUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailTemplateUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailTemplateGetPayload<T>, Context>) => Promise<Prisma.EmailTemplateGetPayload<T>>
            };

    };
}
