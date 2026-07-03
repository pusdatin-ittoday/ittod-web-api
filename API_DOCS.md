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
      "title": "Mine Today",
      "description": "Event Description",
      "type": "competition",
      "price": 50000,
      "logo_url": "http://localhost:8000/storage/events/logos/example.webp",
      "contact_person1": "628123456789",
      "contact_person2": "628123456789",
      "method": "offline",
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
    "title": "Mine Today",
    "description": "Event Description",
    "type": "competition",
    "price": 50000,
    "logo_url": "http://localhost:8000/storage/events/logos/example.webp",
    "contact_person1": "628123456789",
    "contact_person2": "628123456789",
    "method": "offline",
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

---

### `GET /api/halaman-kompetisi-event`

Fetches a list of all available events stripped of their relationships (teams, participants, etc.) to optimize payload size. Requires authentication.

**Parameters:**

None.

**Response:**

`200 OK`

```json
[
  {
    "id": "uuid-string-here",
    "title": "Mine Today",
    "description": "Event Description",
    "guide_book_url": "https://example.com/guidebook.pdf",
    "type": "competition",
    "participation_type": "individual",
    "contact_person1": "628123456789",
    "contact_person2": null,
    "method": "offline",
    "max_noncompetition_participant": 100,
    "logo_url": "http://localhost:8000/storage/events/logos/example.webp"
  }
]
```

`500 Internal Server Error`

```json
{
  "error": "Internal server error"
}
```
```
