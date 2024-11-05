export default function shortenUUID(UUID: string): string {
  return "..." + UUID.split('-').pop() || ''
}
