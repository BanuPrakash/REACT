import React from 'react'
import { defaultTheme, Grid, Provider, View } from '@adobe/react-spectrum';
import { Form, TextField, ButtonGroup, Button } from '@adobe/react-spectrum';
export default function ProductForm() {
  let [title, setTitle] = React.useState('');

  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // axios.post(...)
  };
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={[
          'header  header',
          'sidebar content',
          'footer  footer'
        ]}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        height="size-6000"
        gap="size-100">
        <View backgroundColor="celery-600" gridArea="header">
          Product Form
        </View>
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View gridArea="content">
          <Form onSubmit={onSubmit} maxWidth="size-3000">
            <TextField label="title" value={title} onChange={setTitle} />

            <ButtonGroup>
              <Button type="submit" variant="primary">Submit</Button>
              <Button type="reset" variant="secondary">Reset</Button>
            </ButtonGroup>
          </Form>
        </View>
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid>

    </Provider>
  )
}
