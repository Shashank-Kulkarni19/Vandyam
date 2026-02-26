import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import { Product } from "@/domain/product";
import { memo } from "react";

const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Product Image Section - Full Width Horizontal with Background Image */}
      {/* Product Image Section - Full Width Horizontal */}
      {product.image && (
        <div className="relative bg-gray-50 flex items-center justify-center py-12 lg:py-20">
          <div className="relative w-full max-w-4xl px-4 aspect-[16/9]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      )}

      {/* Product Info Section - Full Width Below Image */}
      <div className="p-8 lg:p-12">
        <CardHeader className="p-0 mb-6">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {product.icon}
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800">{product.title}</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Full Description */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3 text-center">Product Overview</h4>
            <CardDescription className="text-gray-600 text-base leading-relaxed text-center max-w-4xl mx-auto">{product.description}</CardDescription>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">Key Features</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <div key={idx} className="border-l-4 border-green-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 mb-1">{feature.title}</h5>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
});

export default ProductCard;
