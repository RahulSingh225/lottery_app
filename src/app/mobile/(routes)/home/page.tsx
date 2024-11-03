import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Anvil } from 'lucide-react';
function Home() {
  return (
    <div>
    <h1 className='py-10 px-10 mx-auto text-red-500'>Welcome User</h1>
    <Card className="max-w-sm mx-auto">
    <CardHeader>
      <CardTitle className="text-blue-600">Welcome to My Card</CardTitle>
      <CardDescription>
        This is a description of the card that provides more detail.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <p>
        Here’s some content for the card. You can add any kind of information
        you want, like text, images, or even other components.
      </p>
      <img src="https://via.placeholder.com/150" alt="Placeholder" className="mt-2" />
    </CardContent>
    <CardFooter>
      <Button variant='mobile' size='icon'>
        <Anvil className='h-5 w-5'/>
      </Button>
    </CardFooter>
  </Card>
  </div>
  )
}

export default Home