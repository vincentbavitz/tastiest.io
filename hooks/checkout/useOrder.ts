// DELETE ME ENTIRE FILE
export const t = 5;
// export function useOrder(token: string, initialOrder?: Order) {
//   const { user } = useAuth();
//   const router = useRouter();

//   const { data: order, isValidating: isOrderUpdating, mutate } = useSWR<Order>(
//     `${LocalEndpoint.GET_ORDER}/?token=${token}`,
//     {
//       initialData: initialOrder,
//       refreshInterval: 5000,
//     },
//   );

//   dlog('useOrder ➡️ order:', order);

//   // Set userId as soon as they sign in
//   useEffect(() => {
//     if (!order?.userId && user?.uid) {
//       updateOrder({ userId: user.uid });
//     }
//   }, [user]);

//   const updateOrder = async ({
//     heads = null,
//     promoCode = null,
//     paymentMethodId = null,
//   }: Omit<UpdateOrderParams, 'token'>) => {
//     const { success, error } = await postFetch<
//       UpdateOrderParams,
//       UpdateOrderReturn
//     >(LocalEndpoint.UPDATE_ORDER, {
//       token,
//       userId: user?.uid ?? null,
//       promoCode,
//       heads,
//       paymentMethodId,
//     });

//     if (success) {
//       // Set order mutation to make changes appear instant
//       mutate({
//         ...order,
//         promoCode,
//         heads,
//         paymentMethod: paymentMethodId,
//       });
//     }

//     return { success, error };
//   };

//   const pay = async () => {
//     dlog('useOrder ➡️ paying:');

//     const {
//       data: { order: _order },
//       success,
//       error,
//     } = await postFetch<PayParams, PayReturn>(LocalEndpoint.PAY, {
//       token,
//       userId: user.uid,
//       userAgent: navigator.userAgent,
//     });

//     // Payment success
//     if (success) {
//       // Immediately update order
//       mutate(_order);

//       // Move to thank-you page
//       if (success) {
//         router.push(`/thank-you/?token=${order.token}`);
//       }

//       return { success: true, error: null };
//     }

//     // Payment failure
//     return { success, error };
//   };

//   return { order, updateOrder, isOrderUpdating, pay };
// }
