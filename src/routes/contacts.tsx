import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contacts')({
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <div className="p-2">
      <h3>Контакты</h3>
    </div>
  );
}
