"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { ShoppingCart, ArrowLeft, Clock, X, Info, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { format } from "date-fns"
import { ScrollArea } from "./ui/scroll-area"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserOrders()
  }, [])

  // Fetch user-specific orders
  const fetchUserOrders = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      const selectedTable = localStorage.getItem("tableNumber") // 👈 get the selected table number
  
      const res = await axios.get("http://localhost:5000/api/orders/my-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  
      // ✅ Filter orders for the selected table number
      const filteredOrders = res.data.filter(
        (order) => order.tableNumber == selectedTable
      )
  
      setCartItems(filteredOrders)
    } catch (error) {
      console.error("Error fetching orders:", error)
    } finally {
      setLoading(false)
    }
  }
  

  // Handle Order Cancellation
  const handleCancelOrder = async (orderId) => {
    try {
      const token = localStorage.getItem("token")

      await axios.delete(`http://localhost:5000/api/orders/cancel-order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      // Remove the cancelled order from state
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== orderId))
      alert("Order cancelled successfully!")
    } catch (error) {
      console.error("Error cancelling order:", error)
      alert("Failed to cancel order.")
    }
  }

  // Format Date
  const formatOrderDate = (date) => format(new Date(date), "PPP 'at' p")

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/Home" className="flex items-center gap-2 text-[#122348] font-semibold hover:text-[#ff3131]">
            <ArrowLeft className="h-5 w-5" /> Back to Menu
          </Link>
          <div className="flex items-center gap-2 text-[#122348] font-semibold">
            <ShoppingCart className="h-5 w-5" /> Your Orders
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
        <div>
  <h1 className="text-3xl font-bold text-[#122348]">Your Orders</h1>
  <p className="text-sm text-gray-500 mt-1">
    Showing orders for <span className="font-semibold text-[#122348]">Table {localStorage.getItem("tableNumber")}</span>
  </p>
</div>

        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff3131]"></div>
          </div>
        ) : cartItems.length === 0 ? (
          <Card className="text-center shadow-md border-0">
            <CardHeader>
              <Info className="w-16 h-16 text-[#122348]/30 mx-auto" />
              <h3 className="text-xl font-medium text-[#122348] mt-4">No orders found</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-6">Your orders will appear here after purchase.</p>
            </CardContent>
            <CardFooter className="flex justify-center pb-6">
              <Link to="/">
                <Button className="bg-[#ff3131] hover:bg-[#ff3131]/90 text-white">Browse Menu</Button>
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <div className="grid gap-4">
            {cartItems.map((order) => (
              <Card key={order._id} className="overflow-hidden border-0 shadow-md">
                <CardHeader className="bg-gradient-to-r from-[#122348] to-[#1a3266] text-white p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-[#ff3131]" />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {order.foodName ? order.foodName : `Order #${order._id.slice(-6)}`}
                        </h3>
                        <div className="flex items-center text-xs text-gray-300 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatOrderDate(order.createdAt)}
                        </div>
                      </div>
                    </div>
                    <span className="text-lg font-bold bg-white/10 px-3 py-1 rounded-full">₹{order.totalPrice}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-[#122348] uppercase mb-2">Order Details</h4>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Base Price:</span>
                        <span className="font-medium">₹{order.basePrice}</span>
                      </div>

                      {/* Table Number */}
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Table Number:</span>
                        <span className="font-medium">{order.tableNumber}</span> {/* ✅ Display tableNumber */}
                      </div>

                      {/* Special Instructions */}
                      {order.specialInstructions && (
                        <div className="mt-3 bg-amber-50 p-3 rounded-md border border-amber-100">
                          <h5 className="text-xs font-semibold text-amber-800 mb-1">SPECIAL INSTRUCTIONS</h5>
                          <p className="text-sm text-amber-700">{order.specialInstructions}</p>
                        </div>
                      )}
                    </div>

                    {/* Add-ons section */}
                    {order.addOns && order.addOns.length > 0 && (
                      <div className="md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 md:pl-4 pt-3 md:pt-0">
                        <h4 className="text-sm font-semibold text-[#122348] uppercase mb-2">Add-ons</h4>
                        <ScrollArea className="h-24 w-full">
                          <div className="pr-4">
                            {order.addOns.map((item, index) => (
                              <div
                                key={index}
                                className="flex justify-between text-sm py-1.5 border-b border-gray-100 last:border-0"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-gray-800">{item.name}</span>
                                  <Badge variant="outline" className="text-xs bg-gray-100 text-gray-600">
                                    x{item.quantity}
                                  </Badge>
                                </div>
                                <span className="text-gray-600">₹{item.price * item.quantity}</span>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </div>
                    )}
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="p-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Order ID: <span className="font-mono">{order._id?.slice(-8)}</span>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => handleCancelOrder(order._id)}
                  >
                    <X className="h-4 w-4 mr-1" /> Cancel Order
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default CartPage