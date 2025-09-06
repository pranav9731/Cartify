type Product = { id: string; title: string; description: string; price: number; category: string; imageUrl?: string };

export function ProductCard({ product, onAdd }: { product: Product; onAdd: (id: string) => void }) {
  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition">
      {product.imageUrl ? <figure><img src={product.imageUrl} alt={product.title} className="h-48 w-full object-cover" /></figure> : null}
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="text-sm text-base-content/70">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="badge badge-outline">{product.category}</div>
          <div className="font-semibold">${product.price.toFixed(2)}</div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary" onClick={() => onAdd(product.id)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}