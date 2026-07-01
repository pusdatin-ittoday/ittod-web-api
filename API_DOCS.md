# ITTOD Web API Documentation

## Events (Public)

These endpoints are designed to fetch dynamic event information without requiring authentication.

### `GET /api/events`

Fetches a list of all events. Can optionally be filtered by the `type` of event.

**Parameters:**

- `type` (optional string): Filter by event type (e.g. `competition`, `non_competition`)

**Response:**

`200 OK`

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-string-here",
      "title": "GameToday",
      "description": "Event Description",
      "type": "competition",
      "price": 50000,
      "contact_person1": "Alice - 08123456789",
      "contact_person2": "Bob - 08123456789",
      "max_noncompetition_participant": 100,
      "is_active": true,
      "requires_submission": true,
      "timelines": [
        {
          "id": "timeline-uuid",
          "event_id": "uuid-string-here",
          "name": "Registration Batch 1",
          "date": "2025-05-27T00:00:00Z"
        }
      ]
    }
  ]
}
```

`500 Internal Server Error`

```json
{
  "success": false,
  "error": "Internal server error"
}
```

---

### `GET /api/events/:id`

Fetches a single event details by its UUID.

**Parameters:**

- `id` (required string): The UUID of the event.

**Response:**

`200 OK`

```json
{
  "success": true,
  "data": {
    "id": "uuid-string-here",
    "title": "GameToday",
    "description": "Event Description",
    "type": "competition",
    "price": 50000,
    "contact_person1": "Alice - 08123456789",
    "contact_person2": "Bob - 08123456789",
    "max_noncompetition_participant": 100,
    "is_active": true,
    "requires_submission": true,
    "timelines": [
      {
        "id": "timeline-uuid",
        "event_id": "uuid-string-here",
        "name": "Registration Batch 1",
        "date": "2025-05-27T00:00:00Z"
      }
    ]
  }
}
```

`404 Not Found`

```json
{
  "success": false,
  "error": "Event not found"
}
```

`500 Internal Server Error`

```json
{
  "success": false,
  "error": "Internal server error"
}
```
