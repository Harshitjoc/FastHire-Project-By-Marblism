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

        createMany: procedure.input($Schema.EmailRecipientInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailRecipient.createMany(input as any))),

        create: procedure.input($Schema.EmailRecipientInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailRecipient.create(input as any))),

        deleteMany: procedure.input($Schema.EmailRecipientInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailRecipient.deleteMany(input as any))),

        delete: procedure.input($Schema.EmailRecipientInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailRecipient.delete(input as any))),

        findFirst: procedure.input($Schema.EmailRecipientInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).emailRecipient.findFirst(input as any))),

        findMany: procedure.input($Schema.EmailRecipientInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).emailRecipient.findMany(input as any))),

        findUnique: procedure.input($Schema.EmailRecipientInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).emailRecipient.findUnique(input as any))),

        updateMany: procedure.input($Schema.EmailRecipientInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailRecipient.updateMany(input as any))),

        update: procedure.input($Schema.EmailRecipientInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).emailRecipient.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EmailRecipientCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailRecipientCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailRecipientCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailRecipientCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EmailRecipientCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailRecipientCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailRecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailRecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailRecipientCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailRecipientCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailRecipientGetPayload<T>, Context>) => Promise<Prisma.EmailRecipientGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EmailRecipientDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailRecipientDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailRecipientDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailRecipientDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EmailRecipientDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailRecipientDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailRecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailRecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailRecipientDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailRecipientDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailRecipientGetPayload<T>, Context>) => Promise<Prisma.EmailRecipientGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EmailRecipientFindFirstArgs, TData = Prisma.EmailRecipientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmailRecipientFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmailRecipientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailRecipientFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmailRecipientFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmailRecipientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmailRecipientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EmailRecipientFindManyArgs, TData = Array<Prisma.EmailRecipientGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.EmailRecipientFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EmailRecipientGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailRecipientFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmailRecipientFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EmailRecipientGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EmailRecipientGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EmailRecipientFindUniqueArgs, TData = Prisma.EmailRecipientGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EmailRecipientFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EmailRecipientGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EmailRecipientFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EmailRecipientFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EmailRecipientGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EmailRecipientGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EmailRecipientUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailRecipientUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailRecipientUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailRecipientUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EmailRecipientUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EmailRecipientUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EmailRecipientGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EmailRecipientGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EmailRecipientUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EmailRecipientUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EmailRecipientGetPayload<T>, Context>) => Promise<Prisma.EmailRecipientGetPayload<T>>
            };

    };
}
