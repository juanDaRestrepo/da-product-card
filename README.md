# da-product-card

Este es un paquete de pruebas de despliegue en NPM

### Juan Restrepo

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle ProductButtons} from 'do-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
>
    {
        ({ reset, isMaxCountReached, increaseBy, counter }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
    }
</ProductCard>
```
