// import { useState } from 'react'
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { AppShell, Application } from '@somethingsexy/sdk'

export const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <Application>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          // collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          {/* <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        /> */}
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </Application>
  )
}
