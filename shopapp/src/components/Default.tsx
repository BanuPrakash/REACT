import React from 'react'
import { Button } from '@swc-react/button';
import { Card } from '@swc-react/card';
import { useNavigate } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
export default function Default() {
  let navigate = useNavigate();
  return (
    <Provider theme={defaultTheme}>
      <Card
        subheading="JPG Photo"
        className="--spectrum-card-body-header-height: auto;">
        <h1 slot="heading">Card Heading</h1>
        <img alt="" slot="cover-photo" src="https://picsum.photos/200/300" />

        <div slot="footer">
          <Button variant="secondary" onClick={() => navigate("/")}>Back to Home Page</Button>
        </div>
      </Card>
    </Provider>
  )
}
