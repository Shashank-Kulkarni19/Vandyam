import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import { Product } from "@/domain/product";
import { memo } from "react";

const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Product Image Section - Full Width Horizontal with Background Image */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={product.image} alt={product.title} fill className="object-cover" priority />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content over background */}
        <div className="relative z-10 flex items-center justify-center py-24 px-8">
          <div className="text-center text-white">
            <div className="w-40 h-40 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center border-4 border-white/30">
              <div className="text-white scale-[2] drop-shadow-lg">{product.icon}</div>
            </div>
          </div>
        </div>
      </div>

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
