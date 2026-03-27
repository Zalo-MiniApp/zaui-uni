# ZaUI React Components (v1.10.x)

## Tổng quan

ZaUI Component là bộ UI Components được thiết kế theo chuẩn mobile của Zalo, giúp rút ngắn thời gian phát triển Mini App và tạo giao diện thân thiện với người dùng.

## Cài đặt

```bash
npm install zmp-ui
```

## Sử dụng cơ bản

```jsx
import React from "react";
import { Button } from "zmp-ui";

// Import stylesheet (một lần trong App)
import "zmp-ui/zaui.css";

const HomePage = () => {
  return <Button size="large">Button</Button>;
};
```

---

## Container Components

### App

Component chính chứa toàn bộ nội dung và cài đặt chung của ứng dụng.

```jsx
import { App, ZMPRouter, AnimationRoutes } from "zmp-ui";
import { Route } from "react-router-dom";

function MyApp() {
  return (
    <App theme="light">
      <ZMPRouter>
        <AnimationRoutes>
          <Route path="/" element={<HomePage />} />
        </AnimationRoutes>
      </ZMPRouter>
    </App>
  );
}
```

**Props:**
| Name | Type | Default | Description |
|------|------|---------|-------------|
| theme | `"light"` \| `"dark"` | - | Theme cho các component trong App |

**useTheme Hook:**

```jsx
import { useTheme } from "zmp-ui";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  
  const toggleTheme = () => {
    setTheme({ mode: theme === "light" ? "dark" : "light" });
  };
  
  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
}
```

### Page

Component wrapper nội dung trang. **Cần sử dụng với react-router hoặc ZMPRouter.**

```jsx
import { Page } from "zmp-ui";

function HomePage() {
  return (
    <Page hideScrollbar={false} resetScroll={true}>
      {/* Page content */}
    </Page>
  );
}
```

**Props:**
| Name | Type | Default | Description |
|------|------|---------|-------------|
| resetScroll | boolean | true | Scroll lên đầu trang khi chuyển trang |
| hideScrollbar | boolean | false | Ẩn thanh scroll bar |
| restoreScroll | boolean | false | Khôi phục vị trí cuộn khi truy cập trang |
| restoreScrollOnBack | boolean | false | Chỉ khôi phục vị trí khi back từ trang khác |
| name | string | - | Unique name cho trang (dùng với restoreScroll) |

### Box

Component giúp thêm khoảng cách theo spacing system và hỗ trợ Flex Layout.

```jsx
import { Box, Button } from "zmp-ui";

function Example() {
  return (
    <>
      {/* Margin/Padding - level x 4px */}
      <Box mt={4} mb={2} px={4}>
        <Button>Button 1</Button>
      </Box>
      
      {/* Flex Layout */}
      <Box flex justifyContent="space-between" alignItems="center">
        <span>Left</span>
        <span>Right</span>
      </Box>
    </>
  );
}
```

**Spacing Props (level 0-10, mỗi level = 4px):**
| Name | Description |
|------|-------------|
| m | margin |
| p | padding |
| mt, mb, ml, mr | margin top/bottom/left/right |
| pt, pb, pl, pr | padding top/bottom/left/right |
| mx, my | margin horizontal/vertical |
| px, py | padding horizontal/vertical |

**Flex Props:**
| Name | Type | Description |
|------|------|-------------|
| flex | boolean | Bật flex layout |
| flexDirection | string | flex-direction |
| justifyContent | string | justify-content |
| alignItems | string | align-items |
| flexWrap | string | flex-wrap |

---

## Router Components

### ZMPRouter

Wrapper thay thế cho BrowserRouter, config sẵn basename cho Mini App.

```jsx
import { App, ZMPRouter, AnimationRoutes } from "zmp-ui";
import { Route } from "react-router-dom";

function MyApp() {
  return (
    <App>
      <ZMPRouter>
        <AnimationRoutes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </AnimationRoutes>
      </ZMPRouter>
    </App>
  );
}
```

**Props:**
| Name | Type | Default | Description |
|------|------|---------|-------------|
| memoryRouter | boolean | false | Sử dụng Memory Router (tự control history) |

### useNavigate Hook

```jsx
import { useNavigate } from "zmp-ui";

function Page1() {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Navigate forward */}
      <Button onClick={() => navigate("/page2")}>
        Go to Page 2
      </Button>
      
      {/* Navigate backward with animation */}
      <Button onClick={() => navigate("/", {
        replace: true,
        animate: true,
        direction: "backward"
      })}>
        Back to Home
      </Button>
      
      {/* Go back in history */}
      <Button onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </>
  );
}
```

**Navigation Options:**
| Name | Type | Description |
|------|------|-------------|
| replace | boolean | Thay thế entry trong history thay vì thêm mới |
| state | any | Thêm data vào state |
| animate | boolean | Bật/tắt animation (với AnimationRoutes) |
| direction | `"forward"` \| `"backward"` | Hướng animation |

---

## General Components

### Button

```jsx
import { Button, Icon } from "zmp-ui";

// Basic
<Button>Default</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>

// Types
<Button type="highlight">Highlight</Button>
<Button type="danger">Danger</Button>
<Button type="neutral">Neutral</Button>

// Sizes
<Button size="large">Large</Button>
<Button size="medium">Medium</Button>
<Button size="small">Small</Button>

// States
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>

// With Icons
<Button prefixIcon={<Icon icon="zi-plus" />}>Add</Button>
<Button suffixIcon={<Icon icon="zi-chevron-right" />}>Next</Button>
<Button icon={<Icon icon="zi-heart" />} />
```

**Props:**
| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | `"primary"` \| `"secondary"` \| `"tertiary"` | `"primary"` | Độ đậm background |
| type | `"highlight"` \| `"danger"` \| `"neutral"` | `"highlight"` | Loại button |
| size | `"large"` \| `"medium"` \| `"small"` | - | Kích thước |
| loading | boolean | - | Hiển thị loading |
| disabled | boolean | - | Disable button |
| fullWidth | boolean | - | Full width |
| prefixIcon | ReactNode | - | Icon trước text |
| suffixIcon | ReactNode | - | Icon sau text |
| icon | ReactNode | - | Icon button |

### Icon

```jsx
import { Icon } from "zmp-ui";

<Icon icon="zi-user" />
<Icon icon="zi-heart" size={24} />
<Icon icon="zi-check" />
<Icon icon="zi-chevron-right" />
<Icon icon="zi-close" />
```

---

## Form Components

### Input

```jsx
import { Input } from "zmp-ui";

<Input 
  label="Email"
  placeholder="Enter email"
  helperText="We'll never share your email"
/>

<Input 
  type="password"
  label="Password"
  showCount
  maxLength={20}
/>

<Input.TextArea
  label="Description"
  rows={4}
/>
```

### Checkbox

```jsx
import { Checkbox } from "zmp-ui";

// Single
<Checkbox label="Accept terms" onChange={(e) => console.log(e.target.checked)} />

// Controlled
<Checkbox checked={isChecked} onChange={handleChange} label="Option" />

// Group
<Checkbox.Group 
  defaultValue={['option1']}
  options={[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' }
  ]}
/>
```

### Radio

```jsx
import { Radio } from "zmp-ui";

<Radio.Group defaultValue="option1">
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
</Radio.Group>
```

### Switch

```jsx
import { Switch } from "zmp-ui";

<Switch defaultChecked onChange={(checked) => console.log(checked)} />
```

### Select

```jsx
import { Select } from "zmp-ui";

<Select
  label="Category"
  placeholder="Select category"
  onChange={(value) => console.log(value)}
>
  <Option value="1">Category 1</Option>
  <Option value="2">Category 2</Option>
</Select>
```

### DatePicker

```jsx
import { DatePicker } from "zmp-ui";

<DatePicker
  label="Birthday"
  onChange={(date) => console.log(date)}
/>
```

### Slider

```jsx
import { Slider } from "zmp-ui";

<Slider defaultValue={50} min={0} max={100} />
```

---

## Data Display Components

### List

```jsx
import { List, Icon } from "zmp-ui";

const { Item } = List;

<List>
  <Item 
    title="Profile"
    prefix={<Icon icon="zi-user" />}
    suffix={<Icon icon="zi-chevron-right" />}
    onClick={() => navigate('/profile')}
  />
  <Item 
    title="Settings"
    subTitle="Manage your preferences"
    prefix={<Icon icon="zi-setting" />}
  />
  <Item title="Logout" />
</List>

// With data source
<List
  dataSource={items}
  renderItem={(item) => (
    <Item title={item.name} subTitle={item.description} />
  )}
/>
```

### Avatar

```jsx
import { Avatar } from "zmp-ui";

<Avatar src="https://example.com/avatar.jpg" />
<Avatar>TN</Avatar>
<Avatar size={48} />
```

### Text

```jsx
import { Text } from "zmp-ui";

<Text>Normal text</Text>
<Text bold>Bold text</Text>
<Text size="small">Small text</Text>
<Text size="xSmall">Extra small</Text>

<Text.Title>Title</Text.Title>
<Text.Title size="small">Small Title</Text.Title>
```

### Progress

```jsx
import { Progress } from "zmp-ui";

<Progress percent={75} />
<Progress percent={50} showInfo />
```

### Spinner

```jsx
import { Spinner } from "zmp-ui";

<Spinner />
<Spinner visible={loading} />
```

### Swiper

```jsx
import { Swiper } from "zmp-ui";

<Swiper>
  <Swiper.Slide>Slide 1</Swiper.Slide>
  <Swiper.Slide>Slide 2</Swiper.Slide>
  <Swiper.Slide>Slide 3</Swiper.Slide>
</Swiper>

<Swiper autoplay loop>
  {images.map((img, i) => (
    <Swiper.Slide key={i}>
      <img src={img} />
    </Swiper.Slide>
  ))}
</Swiper>
```

### ImageViewer

```jsx
import { ImageViewer } from "zmp-ui";

<ImageViewer images={[
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' }
]} />
```

---

## Feedback Components

### Snackbar

```jsx
import { SnackbarProvider, useSnackbar, App } from "zmp-ui";

// Wrap app với SnackbarProvider
function MyApp() {
  return (
    <App>
      <SnackbarProvider>
        <Content />
      </SnackbarProvider>
    </App>
  );
}

// Sử dụng useSnackbar hook
function Content() {
  const { openSnackbar, closeSnackbar, setDownloadProgress } = useSnackbar();
  
  const showSuccess = () => {
    openSnackbar({
      text: "Saved successfully!",
      type: "success",
      duration: 3000
    });
  };
  
  const showError = () => {
    openSnackbar({
      text: "Something went wrong",
      type: "error",
      position: "top"
    });
  };
  
  const showWithAction = () => {
    openSnackbar({
      text: "Item deleted",
      type: "default",
      action: {
        text: "Undo",
        onClick: () => handleUndo()
      }
    });
  };
  
  const showLoading = () => {
    openSnackbar({
      text: "Processing...",
      type: "loading"
    });
  };
  
  return (
    <>
      <Button onClick={showSuccess}>Show Success</Button>
      <Button onClick={showError}>Show Error</Button>
    </>
  );
}
```

**Snackbar Types:**
- `default` - Mặc định
- `success` - Thành công
- `error` - Lỗi
- `warning` - Cảnh báo
- `info` - Thông tin
- `loading` - Loading
- `download` - Tiến trình download
- `countdown` - Countdown
- `wifi-connected` - Kết nối mạng
- `wifi-disconnected` - Ngắt kết nối mạng

### Modal

```jsx
import { Modal, Button } from "zmp-ui";

function Example() {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      
      <Modal
        visible={visible}
        title="Confirm"
        onClose={() => setVisible(false)}
        actions={[
          { text: "Cancel", close: true },
          { text: "Confirm", highLight: true, onClick: handleConfirm }
        ]}
      >
        <p>Are you sure you want to continue?</p>
      </Modal>
    </>
  );
}
```

### Sheet (Bottom Sheet)

```jsx
import { Sheet, Button } from "zmp-ui";

function Example() {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Sheet</Button>
      
      <Sheet
        visible={visible}
        onClose={() => setVisible(false)}
        title="Select Option"
        height="50%"
      >
        <List>
          <List.Item title="Option 1" onClick={() => handleSelect(1)} />
          <List.Item title="Option 2" onClick={() => handleSelect(2)} />
        </List>
      </Sheet>
    </>
  );
}
```

---

## Navigation Components

### Header

```jsx
import { Header } from "zmp-ui";

<Header title="Page Title" showBackIcon />

<Header 
  title="Custom Header"
  leftButton={<Icon icon="zi-close" />}
  rightButton={<Icon icon="zi-more-vert" />}
/>
```

### BottomNavigation

```jsx
import { BottomNavigation, Icon } from "zmp-ui";

<BottomNavigation activeKey="home" onChange={(key) => navigate(key)}>
  <BottomNavigation.Item
    key="home"
    label="Home"
    icon={<Icon icon="zi-home" />}
  />
  <BottomNavigation.Item
    key="cart"
    label="Cart"
    icon={<Icon icon="zi-cart" />}
  />
  <BottomNavigation.Item
    key="profile"
    label="Profile"
    icon={<Icon icon="zi-user" />}
  />
</BottomNavigation>
```

### Tabs

```jsx
import { Tabs } from "zmp-ui";

<Tabs defaultActiveKey="tab1">
  <Tabs.Tab key="tab1" label="Tab 1">
    Content 1
  </Tabs.Tab>
  <Tabs.Tab key="tab2" label="Tab 2">
    Content 2
  </Tabs.Tab>
</Tabs>
```

---

## Layout Components

### Grid

```jsx
import { Grid } from "zmp-ui";

<Grid columnNum={3} columnGap={8}>
  <Grid.Item>Item 1</Grid.Item>
  <Grid.Item>Item 2</Grid.Item>
  <Grid.Item>Item 3</Grid.Item>
</Grid>
```

### Stack

```jsx
import { Stack } from "zmp-ui";

<Stack direction="vertical" spacing={4}>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</Stack>

<Stack direction="horizontal" spacing={2}>
  <Avatar />
  <Text>Username</Text>
</Stack>
```

### Center

```jsx
import { Center } from "zmp-ui";

<Center>
  <Spinner />
</Center>
```

---

## Styling & Theming

### CSS Import

```jsx
// Import tất cả styles
import "zmp-ui/zaui.css";

// Hoặc import riêng từng component
import "zmp-ui/button/styles/button.css";
import "zmp-ui/input/styles/input.css";
```

### Custom Theme Variables

```css
:root {
  --zmp-primary-color: #0068ff;
  --zmp-background-color: #f4f5f6;
  --zmp-text-color: #141415;
}

[data-theme="dark"] {
  --zmp-background-color: #141415;
  --zmp-text-color: #ffffff;
}
```

### Spacing System

Level 0-10, mỗi level = 4px:
- Level 1 = 4px
- Level 2 = 8px
- Level 4 = 16px
- Level 6 = 24px
- Level 10 = 40px

---

## Best Practices

### App Structure

```jsx
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import "zmp-ui/zaui.css";

function MyApp() {
  return (
    <App>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
}
```

### Page Layout

```jsx
import { Page, Box, Header, BottomNavigation } from "zmp-ui";

function HomePage() {
  return (
    <Page>
      <Header title="Home" />
      
      <Box px={4} py={4}>
        {/* Content */}
      </Box>
      
      <BottomNavigation />
    </Page>
  );
}
```

### Form Handling

```jsx
import { Page, Box, Input, Button, useSnackbar } from "zmp-ui";
import { useState } from "react";

function FormPage() {
  const [form, setForm] = useState({ name: '', email: '' });
  const { openSnackbar } = useSnackbar();
  
  const handleSubmit = async () => {
    try {
      await submitForm(form);
      openSnackbar({ type: 'success', text: 'Submitted!' });
    } catch (error) {
      openSnackbar({ type: 'error', text: error.message });
    }
  };
  
  return (
    <Page>
      <Box p={4}>
        <Input 
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Box mt={4}>
          <Input 
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Box>
        <Box mt={6}>
          <Button fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Page>
  );
}
```

---

## Tài liệu tham khảo

- [ZaUI Documentation](https://mini.zalo.me/documents/zaui/)
- [Figma Design System](https://www.figma.com/file/ME5AP7pt79huTBTMdnT7yX/%5BPUBLIC%5D-Zalo-Mini-App-Framework-2.0)
