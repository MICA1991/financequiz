import React, { useState } from 'react';
import { fetchUser, createUser } from './api/user';

function App() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<any>(null);

  const handleFetch = async () => {
    const data = await fetchUser(email);
    setUser(data);
  };

  const handleCreate = async () => {
    const data = await createUser({ email, name: 'Test User' });
    setUser(data);
  };

  return (
    <div>
      <h1>Azure Fullstack Demo</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleFetch}>Fetch User</button>
      <button onClick={handleCreate}>Create User</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default App;
```

---

### **E. `src/main.tsx`**

```typescript
<vscode_codeblock_uri>file:///d%3A/MICA-Website/Webapp/V2/financialliteracy/src/main.tsx</vscode_codeblock_uri>import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);