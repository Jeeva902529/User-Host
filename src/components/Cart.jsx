"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, X } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogClose } from "./ui/dialog"
import { Alert, AlertDescription } from "./ui/alert"
import { v4 as uuidv4 } from "uuid"

export function Cart({ items, setItems }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const updateQuantity = (index, increment) => {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1),
          }
        }
        return item
      }),
    )
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const addOnsTotal = item.addOns.reduce((sum, addon) => sum + addon.price * addon.quantity, 0)
      return total + (item.price + addOnsTotal) * item.quantity
    }, 0)
  }

  const placeOrder = () => {
    // Create a new order object
    const newOrder = {
      id: uuidv4(),
      date: new Date(),
      items: items.map((item) => ({
        id: uuidv4(),
        name: `${item.title} Biryani`,
        addon:
          item.addOns &&
          item.addOns
            .filter((addon) => addon.quantity > 0)
            .map((addon) => `${addon.name} x${addon.quantity}`)
            .join(", "),
        price: item.price + item.addOns.reduce((sum, addon) => sum + addon.price * addon.quantity, 0),
        quantity: item.quantity,
      })),
      total: calculateTotal(),
    }

    // Get existing orders from localStorage
    const existingOrdersJSON = localStorage.getItem("orderHistory")
    const existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : []

    // Add new order to history
    const updatedOrders = [newOrder, ...existingOrders]

    // Save back to localStorage
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders))

    // Show success message and reset cart
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setIsOpen(false)
      setItems([])
    }, 2000)
  }

  return (
    <>
      

    
         
    </>
  )
}

