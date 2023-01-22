import { QueryClient } from "@tanstack/react-query";

const queryConfig = {
	queries: {
		useErrorBoundary: true,
		refetchOnWindowFocus: false,
		retry: false,
		staleTime: 0,
		cacheTime: 24 * 60 * 60 * 1000,
	},
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

export default queryClient;
