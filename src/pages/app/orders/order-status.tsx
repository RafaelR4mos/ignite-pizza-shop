export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMapTextColor: Record<OrderStatus, string[]> = {
  pending: ['Pendente', 'bg-slate-400'],
  canceled: ['Cancelado', 'bg-rose-500'],
  delivered: ['Entregue', 'bg-emerald-500'],
  delivering: ['Em entrega', 'bg-amber-500'],
  processing: ['Em preparo', 'bg-amber-500'],
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={`h-2 w-2 rounded-full ${orderStatusMapTextColor[status][1]}`}
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMapTextColor[status][0]}
      </span>
    </div>
  )
}
